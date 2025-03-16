# Usa una única imagen compatible con AWS Lambda y Node.js 20
FROM public.ecr.aws/lambda/nodejs:20 AS production

# Establecer el directorio de trabajo
WORKDIR /var/task

# Copiar archivos necesarios
COPY package*.json ./

# Instalar dependencias de producción y también @nestjs/cli y @types/node
RUN npm install --only=production \
  && npm install -g @nestjs/cli \
  && npm install --save-dev @types/node

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación con NestJS
RUN npm run build

# Comando de inicio específico para AWS Lambda
CMD ["dist\apps\api\apps\api\src\handler.handler"]
