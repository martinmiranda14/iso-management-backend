export declare enum RiskStatus {
    IDENTIFIED = "identified",
    ASSESSED = "assessed",
    TREATED = "treated",
    ACCEPTED = "accepted",
    CLOSED = "closed"
}
export declare enum RiskLikelihood {
    VERY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
    VERY_HIGH = 5
}
export declare enum RiskImpact {
    VERY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
    VERY_HIGH = 5
}
export declare class Risk {
    id: string;
    title: string;
    description: string;
    status: RiskStatus;
    assetId: string;
    threatSources: string[];
    vulnerabilities: string[];
    likelihood: RiskLikelihood;
    impact: RiskImpact;
    riskScore: number;
    riskLevel: string;
    residualLikelihood: number;
    residualImpact: number;
    residualRiskScore: number;
    relatedControlIds: string[];
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
}
