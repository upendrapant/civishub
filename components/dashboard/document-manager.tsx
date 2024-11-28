"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileUp, Trash2 } from 'lucide-react'

type Document = {
  id: string
  name: string
  type: string
  uploadDate: string
}

export function DocumentManager() {
  const [documents, setDocuments] = useState<Document[]>([
    { id: '1', name: 'Tax_Return_2023.pdf', type: 'PDF', uploadDate: '2024-03-15' },
    { id: '2', name: 'Passport_Scan.jpg', type: 'Image', uploadDate: '2024-02-20' },
    { id: '3', name: 'Medical_Records.pdf', type: 'PDF', uploadDate: '2024-01-10' },
  ])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const newDocument: Document = {
        id: Date.now().toString(),
        name: file.name,
        type: file.type.split('/')[1].toUpperCase(),
        uploadDate: new Date().toISOString().split('T')[0],
      }
      setDocuments([...documents, newDocument])
    }
  }

  const handleDelete = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <Button asChild>
            <label htmlFor="file-upload" className="cursor-pointer">
              <FileUp className="mr-2 h-4 w-4" />
              Upload Document
            </label>
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>{doc.name}</TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.uploadDate}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(doc.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

