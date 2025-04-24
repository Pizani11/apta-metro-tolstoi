
export default function Home() {
  return (
    <main style={{
      fontFamily: 'sans-serif',
      padding: '2rem',
      backgroundColor: '#f9fafb',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Apta Metrô Tolstói</h1>
      <p>Bem-vindo ao seu novo lar, a poucos passos do metrô. Um projeto moderno, compacto e acessível, feito para você.</p>
      <ul style={{ marginTop: '2rem', lineHeight: '1.8' }}>
        <li>🏠 1 e 2 dormitórios com varanda</li>
        <li>🏋️ Academia, coworking, jacuzzi e mais</li>
        <li>📍 Vila Prudente – SP</li>
        <li>💸 Entrada a partir de R$699</li>
      </ul>
    </main>
  );
}
