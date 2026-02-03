export default function Gallery() {
    // Placeholder data
    const images = Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        caption: `Gallery Image ${i + 1}`
    }));

    return (
        <div className="container mx-auto px-4 py-12 md:px-8">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary">Media & Gallery</h1>
                <p className="text-lg text-muted-foreground">A glimpse into the professional and public life of Dr. Abdul Qadeer.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((img) => (
                    <div key={img.id} className="group relative overflow-hidden rounded-lg bg-muted aspect-video hover:shadow-xl transition-all">
                        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                            Image Placeholder
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-6">
                            <span className="text-white font-medium">{img.caption}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
