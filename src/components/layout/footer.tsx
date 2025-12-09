import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} KriRingkas.ID. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
