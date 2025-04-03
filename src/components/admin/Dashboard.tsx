
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Image, Users, MessageSquare } from 'lucide-react';
import { blogPosts } from '@/data/blogData';

export function Dashboard() {
  const stats = [
    {
      title: 'Blog Posts',
      value: blogPosts.length,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      title: 'Portfolio Items',
      value: 12,
      icon: Image,
      color: 'bg-green-500',
    },
    {
      title: 'Leads',
      value: 24,
      icon: MessageSquare,
      color: 'bg-amber-500',
    },
    {
      title: 'Users',
      value: 2,
      icon: Users,
      color: 'bg-purple-500',
    },
  ];

  // Get the latest blog posts
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`${stat.color} p-2 rounded-md`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold tracking-tight mt-6">Recent Activity</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Latest Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-4 border-b pb-4 last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{post.title.en}</p>
                    <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-sm bg-secondary px-2 py-1 rounded">
                    {post.category.en}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No recent leads to display.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
