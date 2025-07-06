import { motion } from 'framer-motion';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import toast from 'react-hot-toast';

interface BlogPostProps {
  post: {
    title: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    content: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: 'Check out this amazing blog post from AstroLMS!',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      }
    } catch (error) {
      toast.error('Failed to share');
    }
  };

  return (
    <article className="pt-24 pb-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to blog */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Blog
          </a>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30">
              <BookOpen className="w-3 h-3 mr-1" />
              Featured Article
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium text-white">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <motion.button
              onClick={handleShare}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 hover:text-blue-200 transition-colors duration-200"
            >
              <Share2 className="w-4 h-4" />
              Share
            </motion.button>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50"></div>
          <div className="relative p-8 lg:p-12">
            <div 
              className="prose prose-lg prose-invert prose-blue max-w-none [&_*]:text-gray-300 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white [&_strong]:text-white [&_b]:text-white [&_a]:text-blue-400 [&_a:hover]:text-blue-300 [&_.lead]:text-gray-200 [&_.lead]:text-xl [&_.lead]:font-medium [&_.lead]:mb-8 [&_.cta-section]:mt-8 [&_.cta-section]:p-6 [&_.cta-section]:bg-blue-900/20 [&_.cta-section]:border [&_.cta-section]:border-blue-500/30 [&_.cta-section]:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                '--tw-prose-body': 'rgb(209 213 219)',
                '--tw-prose-headings': 'rgb(255 255 255)',
                '--tw-prose-lead': 'rgb(229 231 235)',
                '--tw-prose-links': 'rgb(96 165 250)',
                '--tw-prose-bold': 'rgb(255 255 255)',
                '--tw-prose-counters': 'rgb(156 163 175)',
                '--tw-prose-bullets': 'rgb(75 85 99)',
                '--tw-prose-hr': 'rgb(55 65 81)',
                '--tw-prose-quotes': 'rgb(209 213 219)',
                '--tw-prose-quote-borders': 'rgb(55 65 81)',
                '--tw-prose-captions': 'rgb(156 163 175)',
                '--tw-prose-code': 'rgb(209 213 219)',
                '--tw-prose-pre-code': 'rgb(209 213 219)',
                '--tw-prose-pre-bg': 'rgb(17 24 39)',
                '--tw-prose-th-borders': 'rgb(55 65 81)',
                '--tw-prose-td-borders': 'rgb(55 65 81)',
              } as React.CSSProperties}
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500/20 rounded-full animate-float"></div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-blue-500/30 p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Learning?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join us in revolutionizing education with AI-powered learning management. Be among the first to experience the future of learning.
              </p>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Early Access
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 right-8 w-2 h-2 bg-blue-400/30 rounded-full animate-twinkle"></div>
      <div className="absolute top-1/2 left-8 w-1 h-1 bg-purple-400/30 rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-indigo-400/30 rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
    </article>
  );
};

export default BlogPost;