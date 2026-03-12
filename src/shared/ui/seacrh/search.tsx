import type { FC } from "react";
import CrossIcon from '@/shared/assets/icons/cross-icon';
import SearchIcon from '@/shared/assets/icons/search-icon';
import type { TSearchInputUIProps } from './types';
import styles from './search.module.css';

export const SearchUI: FC<TSearchInputUIProps> = ({ placeholder, value, onChange, onClear }) => (
  <div className={styles.wrapper}>
    <SearchIcon className={styles.searchIcon} />
    <input
      className={styles.input}
      type="text"
      name="search"
      autoComplete="off"
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
      }}
    />
    {!!value && (
      <CrossIcon className={styles.close} role="button" aria-label="Очистить поиск" onClick={() => onClear?.()} />
    )}
  </div>
);
