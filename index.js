var map = L.map('map').setView([-25.3976, -51.4646], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function createCustomMarkerIcon(color) {
    return L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 2px solid #333; display: flex; justify-content: center; align-items: center; font-size: 14px; font-weight: bold; color: white;"></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 24],
            popupAnchor: [0, -20]
        });
    }
        
    var farmIcon = createCustomMarkerIcon('#4CAF50');
    var factoryIcon = createCustomMarkerIcon('#FFC107'); 


    var locations = [
        {
            name: "Fazenda Aurora",
            type: "Fazenda",
            products: "Grãos (Milho, Soja), Trigo",
            coords: [-25.35, -51.50],
            icon: farmIcon
        },
            {
             name: "Sítio Boa Vista",
             type: "Fazenda",
             products: "Hortaliças (Alface, Tomate), Frutas",
            coords: [-25.45, -51.55],
            icon: farmIcon
            },
            {
            name: "Pecuária Serra Azul",
            type: "Fazenda",
            products: "Gado (Bovino de Corte), Leite",
            coords: [-25.50, -51.60],
            icon: farmIcon
            },
            {
            name: "Chácara Recanto Verde",
            type: "Fazenda",
            products: "Ovos, Aves Caipiras",
            coords: [-25.30, -51.40],
            icon: farmIcon
            },

            // Fábricas (Receptoras/Processadoras)
            {
            name: "Indústria Alimentícia Central S/A",
            type: "Fábrica",
            receives: "Grãos, Hortaliças, Frutas",
            produces: "Alimentos Processados, Sucos",
            coords: [-25.39, -51.48],
            icon: factoryIcon
            },
            {
                name: "Laticínios Progresso",
                type: "Fábrica",
                receives: "Leite",
            produces: "Leite Pasteurizado, Queijos, Iogurtes",
            coords: [-25.37, -51.45],
            icon: factoryIcon
            },
            {
            name: "Abatedouro Vale Verde",
            type: "Fábrica",
            name: "Laticínios Progresso",
            type: "Fábrica",
            receives: "Leite",
            receives: "Gado (Bovino), Aves",
            produces: "Carnes (Bovina, Aves)",
            coords: [-25.42, -51.52],
            icon: factoryIcon
            },
            {
            name: "Processadora de Cereais Grão Forte",
            type: "Fábrica",
            receives: "Milho, Soja, Trigo",
            produces: "Farinhas, Óleos, Rações",
            coords: [-25.48, -51.40],
            icon: factoryIcon
            }
        ];

        // 4. Adiciona marcadores para cada localização
        locations.forEach(function(loc) {
            var popupContent = `
                <h3>${loc.name}</h3>
                <p><strong>Tipo:</strong> ${loc.type}</p>
            `;
            if (loc.type === "Fazenda") {
                popupContent += `<p><strong>Produz:</strong> ${loc.products}</p>`;
            } else if (loc.type === "Fábrica") {
                popupContent += `
                    <p><strong>Recebe:</strong> ${loc.receives}</p>
                    <p><strong>Produz:</strong> ${loc.produces}</p>
                `;
            }

            L.marker(loc.coords, {icon: loc.icon})
                .addTo(map)
                .bindPopup(popupContent);
        });
