import Accordion, { AccordionProps } from "@/app/components/Accordion"

const items: Array<AccordionProps> = [
    {
        title: "O que exatamente vocês monitoram?",
        description: "Monitoramos uma variedade de dados relacionados a domínios de URL, como alterações no status do site, tempo de resposta, disponibilidade, mudanças no conteúdo e segurança. Isso ajuda a garantir que seu site esteja funcionando corretamente e que você seja notificado sobre qualquer alteração importante."
    },
    {
        title: "Como funcionam os alertas?",
        description: "Os alertas são enviados automaticamente quando detectamos mudanças ou problemas com o seu domínio monitorado. Você pode configurar a frequência e o tipo de alertas, como alertas de downtime, alterações de conteúdo ou problemas de segurança, garantindo que você seja informado imediatamente sobre qualquer ocorrência relevante."
    },
    {
        title: "Preciso pagar para usar?",
        description: "Oferecemos planos gratuitos e pagos, dependendo da quantidade de domínios que você deseja monitorar e das funcionalidades adicionais que precisa, como relatórios detalhados ou suporte prioritário. O plano gratuito oferece recursos básicos para monitoramento de um domínio, enquanto os planos pagos permitem monitorar múltiplos domínios e acessar funcionalidades avançadas."
    },
    {
        title: "Que tipo de informações sobre o domínio vocês mostram?",
        description: "Fornecemos uma visão detalhada sobre o status do seu domínio, incluindo tempo de atividade, tempo de resposta, status de segurança (como certificados SSL), alterações de DNS, e muito mais. Tudo isso para ajudá-lo a ter controle total sobre a saúde e o desempenho do seu site."
    },
    {
        title: "Posso monitorar mais de um item?",
        description: "Sim, você pode monitorar múltiplos domínios e URLs ao mesmo tempo. Nosso sistema permite que você adicione e gerencie vários sites de forma simples e prática, recebendo alertas personalizados para cada um deles."
    },
    {
        title: "Como começo a usar?",
        description: "Para começar, basta criar uma conta em nosso aplicativo e adicionar o domínio ou URL que deseja monitorar. Em seguida, personalize suas preferências de alertas e selecione o tipo de monitoramento desejado. Em minutos, você estará pronto para acompanhar o status e a performance do seu site."
    }
]

const Faqs = () => {
    return (
        <section id="faqs" className="flex items-center justify-center py-10">
            <div className="flex flex-1 flex-col items-center justify-items gap-2">
                <span className="text-3xl lg:text-5xl text-gray-800 font-medium">Perguntas Frequentes</span>
                <div className="mx-auto w-full max-w-2xl flex flex-col gap-4 py-10">
                    {items.map((item, index) => (
                        <Accordion
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faqs