import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu} from 'next/font/google';
import NavB from "./components/navb/NavB";
import Client from "./components/Client"
import RegisterModel from "./components/models/RegisterModel"
import LoginModel from "./components/models/LoginModel"
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import RentModel from './components/models/RentModel';


export const metadata: Metadata = {
  title: 'rentzy',
  description: 'Endless Rentless, Infinite Experiences',
}

const font = Ubuntu({
  subsets: ["latin"],
  weight: ['300']
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Client>
          <ToasterProvider/>
          <RegisterModel />
          <LoginModel />
          <RentModel />
          <NavB currentUser= {currentUser}/>
        </Client>
        {children}
        </body>
    </html>
  )
}
