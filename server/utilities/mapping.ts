export function mapFirebaseDocumentSnapshotToObject<T>(
    doc: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>
): T | null {
    if (!doc.exists) {
        return null;
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
