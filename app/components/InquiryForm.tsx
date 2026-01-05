"use client";

import { useState } from "react";

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        country: "",
        message: "",
        vehicle: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/inquire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", company: "", country: "", message: "", vehicle: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-3xl">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Distributor Inquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="form-label-light">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input-light"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="form-label-light">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input-light"
                            placeholder="john@company.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="form-label-light">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="form-input-light"
                            placeholder="Company Ltd."
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="form-label-light">Country/Region</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="form-input-light"
                            placeholder="South Korea"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="form-label-light">Interested Vehicle Type</label>
                    <select
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="form-input-light [&>option]:text-text-main"
                    >
                        <option value="">-- Select Vehicle Category --</option>
                        <option value="Commercial">Commercial Trucks (Bus, Truck)</option>
                        <option value="Construction">Construction Equipment</option>
                        <option value="Passenger">Passenger Vehicles</option>
                        <option value="Military">Military / Defense</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="space-y-1">
                    <label className="form-label-light">Message</label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input-light"
                        placeholder="Tell us about your requirements..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className={`w-full bg-primary hover:bg-opacity-90 text-white font-display font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed mt-4 ${status === "success"
                        ? "bg-green-600"
                        : ""
                        }`}
                >
                    {status === "submitting" ? "Sending Request..." : status === "success" ? "Submit Completed" : "Submit Inquiry"}
                </button>
            </form>
        </div>
    );
}
