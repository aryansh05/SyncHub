"use client";

import React, { useMemo } from "react";
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

export default function DashboardPage({
  searchParams,
}: {
  searchParams?: Promise<{ search?: string; favourites?: string }>;
}) {
  const { organization } = useOrganization();

  // Unwrap searchParams (it’s now a Promise in Next.js 15)
  const [params, setParams] = React.useState<{ search?: string; favourites?: string }>({});

  React.useEffect(() => {
    async function unwrap() {
      if (searchParams) {
        const resolved = await searchParams;
        setParams(resolved ?? {});
      }
    }
    unwrap();
  }, [searchParams]);

  const safeParams = useMemo(
    () => params ?? {},
    [params.search, params.favourites]
  );

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={safeParams} />
      )}
    </div>
  );
}
