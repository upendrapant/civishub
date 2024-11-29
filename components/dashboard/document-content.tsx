"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileUp, Trash2, Search, Filter, Download, Eye } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Document = {
  id: string
  name: string
  type: string
  category: string
  uploadDate: string
  size: string
}

export function DocumentsContent() {
  const [documents, setDocuments] = useState<Document[]>([
    { id: '1', name: 'Tax_Return_2023.pdf', type: 'PDF', category: 'Tax', uploadDate: '2024-03-15', size: '2.5 MB' },
    { id: '2', name: 'Passport_Scan.jpg', type: 'Image', category: 'Identity', uploadDate: '2024-02-20', size: '1.8 MB' },
    { id: '3', name: 'Medical_Records.pdf', type: 'PDF', category: 'Health', uploadDate: '2024-01-10', size: '5.2 MB' },
    { id: '4', name: 'Driver_License.pdf', type: 'PDF', category: 'Identity', uploadDate: '2023-12-05', size: '1.1 MB' },
    { id: '5', name: 'Property_Deed.pdf', type: 'PDF', category: 'Legal', uploadDate: '2023-11-20', size: '3.7 MB' },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const newDocument: Document = {
        id: Date.now().toString(),
        name: file.name,
        type: file.type.split('/')[1].toUpperCase(),
        category: 'Uncategorized',
        uploadDate: new Date().toISOString().split('T')[0],
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      }
      setDocuments([...documents, newDocument])
    }
  }

  const handleDelete = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id))
  }

  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === 'All' || doc.category === categoryFilter)
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">My Documents</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
              Upload Document
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload New Document</DialogTitle>
              <DialogDescription>
                Choose a file to upload and categorize it.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file-upload" className="text-right">
                  File
                </Label>
                <Input id="file-upload" type="file" className="col-span-3" onChange={handleFileUpload} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tax">Tax</SelectItem>
                    <SelectItem value="Identity">Identity</SelectItem>
                    <SelectItem value="Health">Health</SelectItem>
                    <SelectItem value="Legal">Legal</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">Upload</Button>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300">Document Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Tax">Tax</SelectItem>
                <SelectItem value="Identity">Identity</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Legal">Legal</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.map((doc) => (
                <TableRow key={doc.id} className="hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors">
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>{doc.category}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.uploadDate}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-300">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(doc.id)}
                        className="hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

