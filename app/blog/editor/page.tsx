'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const BlogEditor = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm();
  
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start writing your blog post...</p>',
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      // Save to local storage temporarily
      const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      posts.push({
        ...data,
        content: editor?.getHTML(),
        date: new Date().toISOString(),
      });
      localStorage.setItem('blogPosts', JSON.stringify(posts));
      
      router.push('/blog');
      toast({
        title: 'Post saved successfully!',
        description: 'Your blog post has been saved.',
      });
    } catch (error) {
      toast({
        title: 'Error saving post',
        description: 'There was an error saving your blog post.',
        variant: 'destructive',
      });
    }
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 glass-effect"
    >
      <h1 className="text-3xl font-bold mb-8">New Blog Post</h1>
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <label className="block text-sm font-medium mb-2">Title</label>
                <FormControl>
                  <Input {...field} className="text-lg" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <div className="prose max-w-none">
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border rounded-lg p-4 min-h-[400px] bg-background"
                  >
                    <EditorContent 
                      editor={editor}
                      onBlur={() => field.onChange(editor?.getHTML())}
                      className="focus:outline-none"
                    />
                  </motion.div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              type="submit"
              className="w-full py-6 text-lg"
            >
              Publish Post
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
};

export default BlogEditor;
