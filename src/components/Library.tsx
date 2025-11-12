import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const Library: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "272829") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="container mx-auto py-8">
      {!isAuthenticated ? (
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Project Library</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="password">Password</label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter password"
                  />
                </div>
                <Button type="submit">Enter</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Project Library</h1>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Reference</TableHead>
                  <TableHead>File</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>RAK Project Reference 1</TableCell>
                  <TableCell>RAK-PROJECT REFERENCE1.PDF</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Library;
