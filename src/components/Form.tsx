import { FormEvent, useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { api } from '../lib/axios'
import { Button } from './ui/Button'
import { Input } from './ui/Input'

export function Form() {
  const formRef = useRef<HTMLFormElement>(null)

  const clearInput = () => {
    formRef?.current?.reset()
  }

  const toastMessage = (message: String) => {
    toast.info(message, {
      position: toast.POSITION.TOP_CENTER,
      className: 'max-w-[450px] text-xs p-4'
    })
  }

  const createPool = async (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    console.log(data.poolInput)

    try {
      const response = await api.post('/pools', {
        title: data.poolInput
      })

      const { code } = response.data

      await navigator.clipboard.writeText(code)

      toastMessage(
        `Bolão criado "${data.poolInput}" com sucesso, seu código é ${code}`
      )
    } catch (error) {
      console.log(error)
      toastMessage(`Falha ao criar o bolão - ${error}`)
    }

    clearInput()
  }
  return (
    <>
      <form
        ref={formRef}
        className='flex flex-col lg:flex-row gap-2'
        onSubmit={createPool}>
        <Input />
        <Button />
      </form>
      <ToastContainer />
    </>
  )
}
