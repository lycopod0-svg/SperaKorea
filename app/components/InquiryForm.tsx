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
        <div className="w-full max-w-2xl mx-auto p-8 bg-tech-gray rounded-xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-safety-orange mb-6">Distributor Inquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs text-gray-500 uppercase tracking-wider">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-all outline-none"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs text-gray-500 uppercase tracking-wider">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-all outline-none"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs text-gray-500 uppercase tracking-wider">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-all outline-none"
                            placeholder="Company Ltd."
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs text-gray-500 uppercase tracking-wider">Country/Region</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-all outline-none"
                            placeholder="South Korea"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase tracking-wider">Interested Vehicle Type</label>
                    <select
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-all outline-none appearance-none"
                    >
                        <option value="">-- Select Vehicle Category --</option>
                        <option value="Commercial">Commercial Trucks (Bus, Truck)</option>
                        <option value="Special">Special Purpose (Forklift, Excavator)</option>
                        <option value="Military">Military / Defense</option>
                        <option value="Passenger">Passenger Vehicles</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-gray-500 uppercase tracking-wider">Message</label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-safety-orange focus:ring-1 focus:ring-safety-orange transition-all outline-none"
                        placeholder="Tell us about your requirements..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className={`w-full font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${status === "success"
                        ? "bg-green-600 text-white"
                        : "bg-safety-orange hover:bg-orange-600 text-black"
                        }`}
                >
                    {status === "submitting" ? "Sending Request..." : status === "success" ? "Submit Completed" : "Submit Inquiry"}
                </button>
            </form>
        </div>
    );
}
