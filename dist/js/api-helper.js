// ============================================
// HELPER GLOBAL PARA CHAMADAS DE API
// ============================================
// Este arquivo fornece uma função global para construir URLs da API
// Funciona tanto em desenvolvimento (URL relativa) quanto em produção (URL absoluta)

(function() {
  'use strict';
  
  // Função global para obter URL da API
  window.getApiUrl = function(path) {
    const base = window.API_BASE_URL || '/api';
    const cleanBase = base.replace(/\/$/, ''); // Remove trailing slash
    const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
    return `${cleanBase}${cleanPath}`;
  };
  
  // Helper para fetch com autenticação
  window.apiFetch = async function(url, options = {}) {
    const apiUrl = url.startsWith('http') ? url : window.getApiUrl(url);
    const token = localStorage.getItem('admin_token');
    
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };
    
    if (token) {
      headers['x-auth-token'] = token;
    }
    
    return fetch(apiUrl, {
      ...options,
      headers
    });
  };
})();
