const blogs = [
    { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
    { title: "Advanced React", content: "Dive deeper into React.", isFeatured: false },
    { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true }
];
function BlogPost({ title, content, isFeatured }) {
    return (
        <div className={`blog-post ${isFeatured ? "featured" : ""}`}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
function BlogList({ blogs }) {
    return (
        <div className="blog-container">
            <h1>Dynamic Blog Page</h1>
            {blogs.map((blog, index) => (
                <BlogPost 
                    key={index}
                    title={blog.title}
                    content={blog.content}
                    isFeatured={blog.isFeatured}
                />
            ))}
        </div>
    );
}
function App() {
    return <BlogList blogs={blogs} />;
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(<App />);