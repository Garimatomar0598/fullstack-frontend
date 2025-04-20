"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../components/dashboard/dashboard-shell"
import { getCurrentUser, logoutUser } from "../../api/auth"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [userName, setUserName] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    
    if (!token) {
      router.push("/login")
      return
    }

    const fetchUser = async () => {
      try {
        const user = await getCurrentUser()
        setUserName(user.email)
      } catch (error) {
        console.error("Error fetching user:", error)
        localStorage.removeItem("token")
        router.push("/login")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [router])

  const handleLogout = async () => {
    try {
      await logoutUser()
      localStorage.removeItem("token")
      router.push("/login")
    } catch (error) {
      console.error("Logout error:", error)
      toast({
        variant: "destructive",
        title: "Logout failed",
        description: "Something went wrong. Please try again.",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text={`Welcome back, ${userName}!`}
      />
      <div className="grid gap-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
        <div className="rounded-lg border p-8">
          <h2 className="text-xl font-semibold">Your Dashboard</h2>
          <p className="mt-4 text-muted-foreground">
            This is your protected dashboard page. You can only access this page when you&apos;re logged in.
          </p>
        </div>
      </div>
    </DashboardShell>
  )
}