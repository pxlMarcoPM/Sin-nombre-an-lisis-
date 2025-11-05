
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Quote from './components/Quote';
import TopicSuggester from './components/TopicSuggester';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
          <Section id="introduccion" title="Introducción: El Cine como Reflejo Social">
            <p className="text-lg leading-relaxed">
              El cine, en su máxima expresión, trasciende el mero entretenimiento para convertirse en un espejo de la sociedad, un vehículo para explorar las complejidades de la condición humana. "Sin Nombre" (2009), la ópera prima de Cary Joji Fukunaga, es un ejemplo contundente de este cine comprometido. La película nos sumerge en el arduo y peligroso viaje de los migrantes centroamericanos hacia Estados Unidos, utilizando este periplo como un lienzo para pintar un retrato crudo sobre la identidad, la pertenencia y la búsqueda desesperada de un futuro.
            </p>
          </Section>

          <Section id="desarrollo" title="El Viaje Como Metáfora de la Transición">
            <p className="text-lg leading-relaxed mb-6">
              El tren, conocido como "La Bestia", es más que un simple medio de transporte en la película; es un personaje en sí mismo, un purgatorio en movimiento. Representa la transición forzada, un espacio liminal donde los personajes dejan atrás su pasado sin la certeza de un futuro. El viaje sobre sus vagones simboliza la fragilidad de la vida y la constante exposición al peligro, pero también la resiliencia y la creación de lazos efímeros pero profundos. Fukunaga no romantiza el viaje; lo muestra con un realismo visceral que obliga al espectador a confrontar la brutalidad de la experiencia migrante.
            </p>
            <Quote>
              "En 'Sin Nombre', el sueño americano se desvanece ante la pesadilla del trayecto. No se trata de llegar, sino de sobrevivir al camino."
            </Quote>
          </Section>
          
          <Section id="otredad" title="La Otredad y el 'Otro': Construcción de Identidad en la Frontera">
            <p className="text-lg leading-relaxed">
              La película explora magistralmente el concepto de "otredad". Los migrantes son "el otro" para los países que cruzan, y dentro de su propio grupo, las lealtades y desconfianzas redefinen constantemente las identidades. Willy (El Casper), un miembro de la Mara Salvatrucha, encarna esta dualidad. Para la sociedad, es un paria, un "otro" violento. Sin embargo, en su intento de escape y en su relación con Sayra, busca desprenderse de esa identidad impuesta para encontrar su propia humanidad. La película nos cuestiona sobre cómo construimos la identidad del "otro" a partir del miedo y el prejuicio.
            </p>
          </Section>

          <Section id="identidad" title="Identidad Fragmentada y la Búsqueda de un Nombre">
            <p className="text-lg leading-relaxed mb-6">
              El título, "Sin Nombre", es una poderosa declaración. Los personajes luchan por forjar una identidad más allá de las etiquetas que la sociedad les impone: "inmigrante ilegal", "mara". Sayra busca un futuro, un lugar donde su nombre signifique algo. Willy huye de un apodo que representa un pasado de violencia, buscando redimirse y, quizás, recuperar su nombre propio. Esta lucha por el reconocimiento, por ser más que una estadística o un estereotipo, es el corazón emocional de la película.
            </p>
             <Quote>
              "Ser 'sin nombre' es ser invisible, una condición que la película combate dando rostro y voz a quienes a menudo son silenciados."
            </Quote>
          </Section>

          <Section id="conclusion" title="Conclusión: Un Eco que Perdura">
            <p className="text-lg leading-relaxed">
              "Sin Nombre" es una obra cinematográfica que se niega a ser olvidada. Su relevancia no ha hecho más que crecer en un mundo donde la migración sigue siendo una crisis humanitaria. Fukunaga nos entrega un análisis profundo y sensible que evita los clichés, ofreciendo una narrativa que es a la vez específica en su contexto y universal en sus temas de amor, pérdida y la búsqueda incesante de un lugar al que llamar hogar. La película no ofrece respuestas fáciles, pero plantea preguntas esenciales sobre nuestra humanidad compartida y las fronteras, tanto físicas como emocionales, que nos dividen.
            </p>
          </Section>

          <TopicSuggester />

        </div>
      </main>
    </div>
  );
};

export default App;
