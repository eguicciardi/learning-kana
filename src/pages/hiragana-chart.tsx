import Head from 'next/head'
import Image from 'next/image'

const items = [
  { id: 1, name: 'Item 1', description: 'Description for item 1' },
  { id: 2, name: 'Item 2', description: 'Description for item 2' },
  { id: 3, name: 'Item 3', description: 'Description for item 3' },
]

export default function GridPage() {
  return (
    <>
      <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
      {items.map(item => (
        <div key={item.id} className="border p-4 kana-card">
          <h2 className="font-bold text-lg">{item.name}</h2>
          <p className="mt-2">{item.description}</p>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}
