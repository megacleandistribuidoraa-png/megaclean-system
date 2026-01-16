// ============================================
// EXEMPLO DE CONFIGURAÇÃO CORS NO server.js
// ============================================
// Copie este código e substitua a linha: app.use(cors());

const allowedOrigins = [
  'https://megaclean-frontend.onrender.com', // ⚠️ SUBSTITUA pela URL real do seu frontend
  'http://localhost:3000',                    // Para desenvolvimento local
  'http://localhost:5000'                   // Se usar outra porta
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requisições sem origin (mobile apps, Postman, etc)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
}));

// ============================================
// INSTRUÇÕES:
// ============================================
// 1. Encontre a linha: app.use(cors());
// 2. Substitua pelo código acima
// 3. Substitua 'megaclean-frontend.onrender.com' pela URL real do seu frontend
// 4. Faça commit e push:
//    git add server.js
//    git commit -m "Configurar CORS para frontend"
//    git push
// 5. O Render fará deploy automático
