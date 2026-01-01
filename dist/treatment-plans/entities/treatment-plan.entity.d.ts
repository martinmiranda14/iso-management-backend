export declare enum TreatmentStrategy {
    MITIGATE = "mitigate",
    TRANSFER = "transfer",
    AVOID = "avoid",
    ACCEPT = "accept"
}
export declare enum TreatmentStatus {
    PLANNED = "planned",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    CANCELLED = "cancelled"
}
export declare class TreatmentPlan {
    id: string;
    riskId: string;
    title: string;
    description: string;
    strategy: TreatmentStrategy;
    status: TreatmentStatus;
    controlIds: string[];
    estimatedCost: number;
    actualCost: number;
    plannedStartDate: Date;
    plannedEndDate: Date;
    actualStartDate: Date;
    actualEndDate: Date;
    responsibleUserId: string;
    completionPercentage: number;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
}
