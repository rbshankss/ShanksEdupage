import './globals.css';

export const metadata = {
  title: 'Shanks Education',
  description: 'Hard Work Determines Results',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
