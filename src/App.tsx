import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type Links ={
  url : String;
  id: Number;
  title?:String|null;
}
const MovieLinkApp = () => {
  const [links, setLinks] = useState<Links[]>([]);
  const [newLink, setNewLink] = useState("");
  const [title, setTitle] = useState(null)

  const addLink = () => {
    if (newLink.trim() !== "") {
      setLinks([...links, { url: newLink, id: Date.now() ,title: title }]);
      setNewLink("");
      setTitle(null);
    }
  };

  const removeLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">PocketShare</h1>
      <div className="flex mb-4">
      <div className="flex "><Input
          type="url"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          placeholder="Enter movie link"
          className="flex-grow mr-2"
        />
        <Input
          type="url"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="flex-grow mr-2"
        /></div>
        <Button
          onClick={addLink}
          className="bg-black hover:bg-gray-600 text-white rounded"
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add
        </Button>
      </div>
      <div className="space-y-4">
        {links.map((link) => (
          <Card key={link.id} className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{link.title??"Link shared"}</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeLink(link.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline break-all"
              >
                {link.url}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MovieLinkApp;
