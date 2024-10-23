import { GetServerSideProps } from 'next'

export default function Home() {
  return (
    <>
      <p>suyasuya</p>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: 'https://note.com/minerva_owl/n/nba7b0afef16c',
      permanent: true
    },
  }
}