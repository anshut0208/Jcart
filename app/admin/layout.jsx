import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Jkart. - Admin",
    description: "Jkart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
