import { api } from '../lib/axios'

import Image from 'next/image'
import { Form } from '../components/Form'

import logo from '../assets/logo.svg'
import appHeroImg from '../assets/app-nlw-copa-preview.png'
import usersAvatar from '../assets/users-avatar-example.png'
import checkIcon from '../assets/icon-check.svg'

interface IHomeProps {
  guessCount: number
  poolCount: number
  userCount: number
}

export default function Home({ guessCount, poolCount, userCount }: IHomeProps) {
  return (
    <div className='max-w-6xl w-full h-screen mx-auto pt-8 px-2 flex flex-row flex-wrap xl:flex-nowrap items-center gap-28'>
      <main>
        <Image src={logo} alt='logo da aplicação NLW Copa' quality={100} />
        <h1 className='mt-14 text-5xl font-bold lg:leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div className='mt-10 flex items-center gap-2'>
          <Image src={usersAvatar} alt='avatares de usuários' quality={100} />
          <strong className='text-xl'>
            <span className='text-nlwCopa-green-500'>+{userCount}</span> pessoas
            já estão usando
          </strong>
        </div>
        <div className='w-full mt-10 flex flex-col'>
          <Form />
          <p className='mt-4 text-nlwCopa-gray-300 text-sm leading-relaxed'>
            Após criar seu bolão, você receberá um código único que poderá usar
            para convidar outras pessoas 🚀
          </p>
        </div>
        <div className='mt-10 pt-10 border-t-[1px] border-t-nlwCopa-gray-600 flex justify-between gap-4'>
          <div className='flex items-center gap-4'>
            <Image
              className='w-10 h-10'
              src={checkIcon}
              alt='ícone de check'
              quality={100}
            />
            <div>
              <h3 className='text-2xl font-bold text-nlwCopa-gray-100'>
                +{poolCount}
              </h3>
              <p className='text-nlwCopa-gray-100'>Bolões criados</p>
            </div>
          </div>
          <div className='w-[1px] h-14 bg-nlwCopa-gray-600'></div>
          <div className='flex items-center gap-4'>
            <Image
              className='w-10 h-10'
              src={checkIcon}
              alt='ícone de check'
              quality={100}
            />
            <div>
              <h3 className='text-2xl font-bold text-nlwCopa-gray-100'>
                +{guessCount}
              </h3>
              <p className='text-nlwCopa-gray-100'>Palpites enviados</p>
            </div>
          </div>
        </div>
      </main>
      <Image src={appHeroImg} alt='exibição da aplicação móvel' quality={100} />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const [guessCountRes, poolCountRes, userCountRes] = await Promise.all([
//     api.get('guesses/count'),
//     api.get('pools/count'),
//     api.get('users/count')
//   ])

//   return {
//     props: {
//       guessCount: guessCountRes.data.guessesCount,
//       poolCount: poolCountRes.data.poolsCount,
//       userCount: userCountRes.data.usersCount
//     }
//   }
// }

export async function getStaticProps() {
  const [guessCountRes, poolCountRes, userCountRes] = await Promise.all([
    api.get('guesses/count'),
    api.get('pools/count'),
    api.get('users/count')
  ])

  return {
    props: {
      guessCount: guessCountRes.data.guessesCount,
      poolCount: poolCountRes.data.poolsCount,
      userCount: userCountRes.data.usersCount
    }
  }
}
