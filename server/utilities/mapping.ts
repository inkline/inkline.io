export function mapFirebaseDocumentSnapshotToObject<T, Nullable = true>(
    doc: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>
): Nullable extends true ? T | null : T {
    if (!doc.exists) {
        return null as T;
    }

    return {
        id: doc.id,
        ...doc.data()
    } as T;
}

export function mapFirebaseQuerySnapshotToArray<T>(
    snapshot: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>
): T[] {
    if (snapshot.empty) {
        return [];
    }

    const data: T[] = [];
    for (const doc of snapshot.docs) {
        data.push(mapFirebaseDocumentSnapshotToObject<T>(doc) as T);
    }

    return data;
}
