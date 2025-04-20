import { 
  ShieldCheck, 
  Code, 
  Database, 
  Smartphone 
} from 'lucide-react'

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Built with modern technologies to provide a seamless user experience
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <ShieldCheck className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Secure Authentication</h3>
            <p className="text-center text-muted-foreground">
              Complete user authentication system with secure password handling and protected routes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <Code className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Type-Safe Development</h3>
            <p className="text-center text-muted-foreground">
              End-to-end type safety with TypeScript throughout the application.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <Database className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Prisma ORM</h3>
            <p className="text-center text-muted-foreground">
              Powerful database tools with Prisma ORM for efficient data management.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
            <Smartphone className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Responsive Design</h3>
            <p className="text-center text-muted-foreground">
              Beautiful UI that adapts perfectly to any device or screen size.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}