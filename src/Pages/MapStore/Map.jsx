
import "../MapStore/MapStore.scss"

export function MapStore() {

    return (
        <>
          <div className="map-container">
            <h2>Наши магазины</h2>
         
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.8340854600943!2d30.78976!3d50.5108541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d9131177021f%3A0x36a9ebdb4fd306a5!2z0JPQsNC70Y8g0JHQsNC70YPQstCw0L3QsA!5e0!3m2!1sru!2sua!4v1712345678901 " 
                width="100%" height="450" style={{ border: 0 }} 
                allowFullScreen="" loading="lazy">
            </iframe>
        </div>
        </>
    )
}