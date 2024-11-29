"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    if (query) {
      // Simulated search results
      const simulatedResults = [
        { title: "Tax Filing Guide", category: "Taxes", url: "/dashboard/taxes/guide" },
        { title: "Health Records Access", category: "Health", url: "/dashboard/health/records" },
        { title: "Passport Renewal Process", category: "Citizenship", url: "/dashboard/citizenship/passport" },
        { title: "Voter Registration", category: "Citizenship", url: "/dashboard/citizenship/voter-registration" },
      ].filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(simulatedResults)
    }
  }, [query])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Search Results</h1>
      <p className="text-muted-foreground">Showing results for: &quot;{query}&quot;</p>
      {results.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{result.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Category: {result.category}</p>
                <Button asChild>
                  <Link href={result.url}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p>No results found. Try a different search term.</p>
      )}
    </div>
  )
}

