import Link from "next/link"
import { CustomButton } from "@/components/ui/custom-button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-custom-navy to-custom-blue text-white">
      <h2 className="text-4xl font-bold mb-4">Página não encontrada</h2>
      <p className="text-custom-lightBlue mb-8">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link href="/">
        <CustomButton variant="secondary">
          Voltar para a página inicial
        </CustomButton>
      </Link>
    </div>
  )
}