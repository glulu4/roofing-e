"use client";
import {useState} from "react";

export default function ColorSelector() {
    const [selectedColor, setSelectedColor] = useState('charcoal');

    const colors = [
        {name: 'Charcoal Gray', value: 'charcoal', hex: '#36454F', description: 'Most popular choice - pairs with any exterior'},
        {name: 'Black', value: 'black', hex: '#1C1C1C', description: 'Classic and timeless - hides dirt well'},
        {name: 'White', value: 'white', hex: '#F5F5F5', description: 'Energy efficient - reflects heat and light'},
        {name: 'Bronze', value: 'bronze', hex: '#8C7853', description: 'Warm earth tone - complements brick and stone'},
        {name: 'Forest Green', value: 'forest', hex: '#355E3B', description: 'Natural look - blends with landscapes'},
        {name: 'Barn Red', value: 'red', hex: '#7C0A02', description: 'Bold traditional color - stands out beautifully'},
        {name: 'Copper', value: 'copper', hex: '#B87333', description: 'Premium appearance - develops natural patina'},
        {name: 'Light Gray', value: 'lightgray', hex: '#D3D3D3', description: 'Fades least - stays looking new longer'}
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-4">Popular Metal Roof Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {colors.map((color) => (
                    <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`p-3 rounded-lg border-2 transition-all ${selectedColor === color.value ? 'border-blue-500' : 'border-gray-200'
                            }`}
                    >
                        <div
                            className="w-full h-12 rounded mb-2"
                            style={{backgroundColor: color.hex}}
                        ></div>
                        <span className="text-sm font-medium">{color.name}</span>
                    </button>
                ))}
            </div>
            {selectedColor && (
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                        {colors.find(c => c.value === selectedColor)?.name}
                    </h4>
                    <p className="text-gray-700 text-sm">
                        {colors.find(c => c.value === selectedColor)?.description}
                    </p>
                </div>
            )}
        </div>
    );
}