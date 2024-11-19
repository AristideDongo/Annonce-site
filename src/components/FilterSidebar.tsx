import { FaTimes } from "react-icons/fa";

interface FilterSidebarProps {
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
    minPrice: string;
    setMinPrice: (value: string) => void;
    maxPrice: string;
    setMaxPrice: (value: string) => void;
    sortOption: string;
    setSortOption: (value: string) => void;
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    sidebarRef: React.RefObject<HTMLDivElement>;
}

export default function FilterSidebar({
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    sortOption,
    setSortOption,
    isSidebarOpen,
    toggleSidebar,
    sidebarRef,
}: FilterSidebarProps) {
    return (
        <div
            ref={sidebarRef} // Utiliser la référence sur l'élément de la sidebar
            className={`fixed top-0 left-0 w-80 h-full bg-white shadow-md transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div className="p-4">
                {/* Filtre par catégorie */}
                <div>
                    <label
                        htmlFor="category"
                        className="block mt-20 text-sm font-medium text-gray-700"
                    >
                        Catégorie
                    </label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="Tous">Sélectionnez une catégorie</option>
                        <option value="immobilier">Immobilier</option>
                        <option value="vehicule">Véhicules</option>
                        <option value="electronique">Electronique</option>
                        <option value="electromenager">Electroménager</option>
                        <option value="mode-homme">Mode Homme</option>
                        <option value="mode-femme">Mode Femme</option>
                        <option value="mode-enfant">Mode Enfant</option>
                        <option value="autres">Autres</option>
                    </select>
                </div>

                {/* Filtre par prix min et max */}
                <div className="mt-4">
                    <label
                        htmlFor="min-price"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Prix Min
                    </label>
                    <input
                        type="number"
                        id="min-price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Min"
                    />
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="max-price"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Prix Max
                    </label>
                    <input
                        type="number"
                        id="max-price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Max"
                    />
                </div>

                {/* Tri des résultats */}
                <div className="mt-10">
                    <label
                        htmlFor="sort"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Trier par
                    </label>
                    <select
                        id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Sélectionnez une option</option>
                        <option value="Plus récent">Plus récent</option>
                        <option value="Plus ancien">Plus ancien</option>
                        <option value="Prix croissant">Prix croissant</option>
                        <option value="Prix décroissant">Prix décroissant</option>
                    </select>
                </div>

                <button
                    onClick={toggleSidebar}
                    className="text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-black transition duration-300 px-5 py-3 mb-4 mt-10 flex items-center"
                >
                    <FaTimes className="mr-5" />Fermer
                </button>
            </div>
        </div>
    );
}
