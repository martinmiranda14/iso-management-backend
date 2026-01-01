export declare enum AssetType {
    HARDWARE = "hardware",
    SOFTWARE = "software",
    DATA = "data",
    SERVICES = "services",
    PEOPLE = "people",
    FACILITIES = "facilities"
}
export declare enum AssetCriticality {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical"
}
export declare class Asset {
    id: string;
    name: string;
    description: string;
    type: AssetType;
    criticality: AssetCriticality;
    owner: string;
    location: string;
    confidentialityLevel: number;
    integrityLevel: number;
    availabilityLevel: number;
    relatedControlIds: string[];
    createdAt: Date;
    updatedAt: Date;
}
