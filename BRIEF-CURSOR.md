# Brief Technique - OtziviPro.bg Landing Page

## 1. Recuperation du projet

```bash
git clone https://github.com/ManuDigit/dKGxTd130vXb.git
cd dKGxTd130vXb
```

## 2. Stack Technique

- React 18.3.1
- Vite 5.x
- TypeScript 5.x
- Tailwind CSS 3.x
- React Router DOM 6.30.1

## 3. Installation et Build

```bash
# Installation des dependances
npm install

# Lancement en developpement
npm run dev

# Build production
npm run build

# Le dossier dist contient les fichiers a uploader
```

## 4. Structure des fichiers essentiels

```
/
├── public/
│   ├── favicon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       └── share-icon.png
│
├── src/
│   ├── assets/
│   │   ├── share-icon.png
│   │   ├── testimonial-ivan.jpg
│   │   ├── testimonial-maria.jpg
│   │   └── testimonial-sofia.jpg
│   │
│   ├── components/
│   │   ├── landing/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── KitVisualization.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── FormSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── FounderMessage.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/ (composants Shadcn)
│   │
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   │
│   ├── index.css (design tokens et styles globaux)
│   ├── App.tsx (routing)
│   └── main.tsx (entry point)
│
├── tailwind.config.ts
├── vite.config.ts
└── index.html (meta tags et Schema.org)
```

## 5. Ressources externes

Video dans FounderMessage.tsx :
```
https://vz-e8c49872-87b.b-cdn.net/9a6d4f13-7f02-45bf-b6bc-4c54c21b6dc6/play_720p.mp4
```

Option : Telecharger et heberger localement si souhaite.

Images : Toutes incluses dans /src/assets/ et /public/images/.

## 6. Configuration serveur SPA

Le site est une Single Page Application. Configurer le serveur pour rediriger toutes les routes vers index.html.

### Nginx

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Apache .htaccess

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 7. Deploiement

```bash
# 1. Build
npm run build

# 2. Uploader le contenu du dossier dist a la racine du domaine
```

Structure finale sur serveur :

```
/var/www/otzivipro.bg/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images]
├── favicon.png
├── robots.txt
└── sitemap.xml
```

## 8. Variables environnement

Aucune variable requise pour cette landing page statique.

## 9. Endpoint du formulaire

Le formulaire envoie les donnees vers un webhook n8n. Verifier dans FormSection.tsx l URL du webhook et s assurer qu elle reste accessible.

## 10. Verifications post-deploiement

- Page accueil charge correctement
- Video fondateur se lance
- Formulaire fonctionne
- Images testimonials affichees
- Meta tags OG corrects (tester : https://developers.facebook.com/tools/debug/)
- Sitemap accessible : https://otzivipro.bg/sitemap.xml
- Robots.txt accessible : https://otzivipro.bg/robots.txt
- HTTPS active
