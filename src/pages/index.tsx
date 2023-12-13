import { Inter } from 'next/font/google'
import { Card, Text } from "@upstart/patina-design-system";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Card>
        <Text>Welcome to our Dashboard</Text>
      </Card>
    </>
  )
}
