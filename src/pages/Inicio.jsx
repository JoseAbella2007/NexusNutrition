import { Link } from 'react-router-dom';
import productosIniciales from '../data/productos';
import useLocalStorage from '../hooks/useLocalStorage';
import CardProducto from './productos/CardProducto';
import './Inicio.css';

const CATEGORIAS_HOME = [
  {
    nombre: 'Entrenamiento',
    slug: 'entrenamiento',
    imagen: '/categoria-entrenamiento.jpeg',
    tags: ['Rutinas de gimnasio', 'Fuerza y musculación', 'Cardio', 'CrossFit / funcional'],
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    nombre: 'Nutrición y Dietas',
    slug: 'nutricion-y-dietas',
    imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop',
    tags: ['Alimentación saludable', 'Planes alimentarios', 'Recetas saludables', 'Meal prep'],
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    nombre: 'Salud y Bienestar',
    slug: 'salud-y-bienestar',
    imagen: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop',
    tags: ['Bienestar', 'Sueño y descanso', 'Manejo del estrés', 'Hábitos saludables'],
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4.5 8-11.8A5.2 5.2 0 0 0 12 6a5.2 5.2 0 0 0-8 4.2C4 17.5 12 22 12 22z" />
      </svg>
    ),
  },
  {
    nombre: 'Suplementación',
    slug: 'suplementacion',
    imagen: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80&auto=format&fit=crop',
    tags: ['Proteínas', 'Creatina', 'Pre-entrenos', 'Vitaminas y minerales'],
    icono: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    ),
  },
];

function Inicio() {
  const [productos] = useLocalStorage('productos', productosIniciales);

  const PRODUCTOS_DESTACADOS = CATEGORIAS_HOME.map((cat) =>
    productos.find((p) => p.categoria === cat.nombre)
  );

  return (
    <div className="inicio">
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(/hero-runner.jpeg)` }}>
        <div className="hero__contenido">
          <span className="hero__eyebrow">— NEXUS NUTRITION</span>
          <h1 className="hero__titulo">
            TU MEJOR VERSIÓN
            <br />
            <span className="hero__titulo--verde">EMPIEZA AQUÍ</span>
          </h1>
          <p className="hero__texto">
            Nutrición premium diseñada para acompañar tu rendimiento, tu
            disciplina y tus objetivos.
          </p>
          <div className="hero__acciones">
            <Link to="/categoria/todas" className="hero__boton-primario">
              Descubrir Nexus
            </Link>
            <Link to="/login" className="hero__boton-secundario">
              Crear cuenta
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="categorias">
        <span className="categorias__eyebrow">— CATEGORÍAS</span>
        <h2 className="categorias__titulo">
          Cada objetivo, <span className="categorias__titulo--verde">su fórmula</span>
        </h2>

        <div className="categorias__grid">
          {CATEGORIAS_HOME.map((cat) => (
            <Link key={cat.slug} to={`/categoria/${cat.slug}`} className="categoria-card">
              <span className="categoria-card__corner categoria-card__corner--tl"></span>
              <span className="categoria-card__corner categoria-card__corner--tr"></span>
              <span className="categoria-card__corner categoria-card__corner--bl"></span>
              <span className="categoria-card__corner categoria-card__corner--br"></span>

              <div className="categoria-card__imagen-wrapper">
                <img src={cat.imagen} alt={cat.nombre} className="categoria-card__imagen" />
              </div>

              <span className="categoria-card__icono">{cat.icono}</span>

              <h3 className="categoria-card__nombre">{cat.nombre}</h3>
              <div className="categoria-card__tags">
                {cat.tags.map((tag) => (
                  <span key={tag} className="categoria-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="catalogo-home">
        <span className="catalogo-home__eyebrow">— CATÁLOGO</span>
        <h2 className="catalogo-home__titulo">Lo más elegido</h2>

        <div className="catalogo-home__grid">
          {PRODUCTOS_DESTACADOS.map(
            (producto) => producto && <CardProducto key={producto.id} producto={producto} />
          )}
        </div>

        <Link to="/categoria/todas" className="catalogo-home__ver-todo">
          Ver todo el catálogo
        </Link>
      </section>
    </div>
  );
}

export default Inicio;