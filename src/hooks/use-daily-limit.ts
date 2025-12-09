'use client';

import { useToast } from './use-toast';
import { useState, useEffect } from 'react';

const USAGE_LIMIT = 5;
const STORAGE_KEY = 'kriRingkasUsage';

interface UsageData {
  date: string;
  count: number;
}

export function useDailyLimit() {
  const { toast } = useToast();
  // We need to use state to ensure this code only runs on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getToday = (): string => {
    return new Date().toISOString().split('T')[0];
  };

  const getUsageData = (): UsageData => {
    if (!isClient) return { date: getToday(), count: 0 };
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data) as UsageData;
      }
    } catch (error) {
      console.error('Error reading from localStorage', error);
    }
    return { date: getToday(), count: 0 };
  };

  const setUsageData = (data: UsageData) => {
    if (!isClient) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error writing to localStorage', error);
    }
  };

  const checkLimit = (): boolean => {
    if (!isClient) {
      // Allow server-side rendering to proceed without checks
      return true;
    }
    
    const today = getToday();
    let usage = getUsageData();

    if (usage.date !== today) {
      usage = { date: today, count: 0 };
      setUsageData(usage);
    }

    if (usage.count >= USAGE_LIMIT) {
      toast({
        title: 'Batas Harian Tercapai',
        description: `Anda telah mencapai batas ${USAGE_LIMIT} ringkasan per hari. Coba lagi besok!`,
        variant: 'destructive',
      });
      return false;
    }

    return true;
  };

  const incrementUsage = () => {
    if (!isClient) return;
    const today = getToday();
    let usage = getUsageData();

    if (usage.date !== today) {
      usage = { date: today, count: 1 };
    } else {
      usage.count += 1;
    }
    setUsageData(usage);
  };

  return { checkLimit, incrementUsage };
}
