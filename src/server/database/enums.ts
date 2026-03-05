export function getEnumValues<T extends object, TAA extends T[keyof T]>(
	object: T,
) {
	return Object.values(object) as [TAA, ...Array<TAA>];
}
