export interface AbstractServiceInterface<TEntity> {
  add(input: TEntity): void;
  readAll(input: TEntity): ReadonlyArray<TEntity>
  readById(id: string): TEntity | null;
  update(input: TEntity): void;
  delete(id: string): void;
}
