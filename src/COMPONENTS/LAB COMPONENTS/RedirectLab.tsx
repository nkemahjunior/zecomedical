"use client";

import { getLabTechnician } from "@/DATA_FETCHING/AUTH/functions/getLabTechnician";
import { labDepartments, roles } from "@/TYPES/AuthTypes/AuthTypes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectLab() {
  const router = useRouter();

  useEffect(() => {
    async function checkLab() {
      const user = await getLabTechnician();

      if (!user || user.userID.role.id !== roles.LAB) {
        router.replace("/auth/signin");
      } else if (user.labDepartment.id === labDepartments.BLOODBANK) {
        router.replace("/lab/bloodBank");
      } else if (user.labDepartment.id === labDepartments.IMMUNOLOGY) {
        router.replace("/lab/immunology");
      } else if (user.labDepartment.id === labDepartments.MICROBIOLOGY) {
        router.replace("/lab/microbiology");
      } else if (user.labDepartment.id === labDepartments.PARASITOLOGY) {
        router.replace("/lab/parasitology");
      }
    }

    checkLab();
  }, []);

  return <div>redirecting......</div>;
}
