import './globals.css';

export const metadata = {
  title: 'Junbae Hyun — Software & Digital Systems',
  description:
    'Software and digital systems professional combining development, international operations, and cross-cultural technology.',
  openGraph: {
    title: 'Junbae Hyun — Software & Digital Systems',
    description:
      'Technology × International Operations × Cross-cultural Service',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
