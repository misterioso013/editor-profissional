'use client'

import { CustomButton } from "@/components/ui/custom-button"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-custom-navy to-custom-blue text-white">
      <h2 className="text-4xl font-bold mb-4">Algo deu errado!</h2>
      <p className="text-custom-lightBlue mb-8">
        Desculpe pelo inconveniente. Por favor, tente novamente.
      </p>
      <CustomButton
        variant="secondary"
        onClick={reset}
      >
        Tentar novamente
      </CustomButton>
    </div>
  )
}