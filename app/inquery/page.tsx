import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'; // Ensure it always fetches fresh data

export default async function InquiriesPage() {
    try {
        // 1. Fetch data from DB
        // 1. Fetch data from DB
        const inquiries = await prisma.inquiry.findMany({
            orderBy: { createdAt: 'desc' }
        });

        return (
            <div className="min-h-screen bg-white text-black p-8">
                <h1 className="text-3xl font-bold mb-6">Inquiry Database (Internal)</h1>
                <p className="mb-4 text-gray-600">Total Records: {inquiries.length}</p>

                <div className="overflow-x-auto border rounded-lg shadow">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Types</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {inquiries.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(item.createdAt).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.company}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                                        <a href={`mailto:${item.email}`}>{item.email}</a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {item.vehicle}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                        {item.message}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } catch (error: any) {
        return (
            <div className="min-h-screen bg-white text-red-600 p-8">
                <h1 className="text-3xl font-bold mb-6">System Error</h1>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <p className="font-bold mb-2">Error Message:</p>
                    <pre className="whitespace-pre-wrap break-words font-mono text-sm">
                        {error?.message || JSON.stringify(error)}
                    </pre>
                    <p className="mt-4 text-gray-600 text-sm">
                        Please check Vercel Logs or Database Connection.
                    </p>
                </div>
            </div>
        );
    }
}
