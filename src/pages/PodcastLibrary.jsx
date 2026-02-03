export default function PodcastLibrary() {
    const videos = [
        "avqIJZM4KKY",
        "jUOcoOQjkWY",
        "ojPVXMI7QNU",
        "R4tswhJAiXU",
        "ghG1xGpEy2M",
        "NM9rCunRfU4",
        "aqBHHy_7JD8",
        "LjR0nCAUXwE",
        "aqBHHy_7JD8"
    ];

    return (
        <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            {/* Header Section */}
            <div className="py-16 text-center bg-black/50 bg-[url('https://images.unsplash.com/photo-1478737270239-2f52b27e9088?q=80&w=2060&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay">
                <h2 className="text-primary font-bold uppercase tracking-widest text-lg mb-2">Podcast With</h2>
                <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">Dr. Abdul Qadeer</h1>
            </div>

            <div className="container mx-auto px-4 py-12 md:px-8 max-w-6xl">
                <div className="grid gap-8 md:grid-cols-2">
                    {videos.map((id, index) => (
                        <div key={index} className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-card shadow-lg hover:border-primary/50 transition-all duration-300 group">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${id}`}
                                title={`Podcast Video ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
