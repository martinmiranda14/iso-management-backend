export declare enum ControlCategory {
    ORGANIZATIONAL = "organizational",
    PEOPLE = "people",
    PHYSICAL = "physical",
    TECHNOLOGICAL = "technological"
}
export declare enum ImplementationStatus {
    NOT_STARTED = "not_started",
    IN_PROGRESS = "in_progress",
    IMPLEMENTED = "implemented",
    NOT_APPLICABLE = "not_applicable"
}
export declare class Control {
    id: string;
    code: string;
    name: string;
    description: string;
    category: ControlCategory;
    status: ImplementationStatus;
    implementationNotes: string;
    implementationPercentage: number;
    relatedControls: string[];
    responsibleUserId: string;
    createdAt: Date;
    updatedAt: Date;
}
