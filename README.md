# Microfrontend Application

This project consists of three microfrontends built using Webpack Module Federation:

- **Container App** (Main app, integrates other apps)
- **Auth App** (Handles authentication logic, consumes functions from Container)
- **Marketing App** (Independent marketing features)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Architecture](#architecture)
3. [Setup & Running](#setup--running)
    - [Container App](#container-app)
    - [Auth App](#auth-app)
    - [Marketing App](#marketing-app)
4. [Federated Modules](#federated-modules)
5. [Environment Variables](#environment-variables)
6. [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)
- Webpack 5
- Docker (Optional, if containerizing)

Clone the repository and install dependencies for each app.

```bash
git clone <repository-url>
cd <repository>
```